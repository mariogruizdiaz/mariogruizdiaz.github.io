import * as globalModels from "influencers-models";
import { actionTypes } from "../actionTypes";
import { commonStatusesDescriptions, commonStatuses } from "../models/common";

const initialState = {
    items: [],
    pageIndex: -1,
    fetchStatus: commonStatuses.none,
    fetchStatusDescription: commonStatusesDescriptions[commonStatuses.none],
    selectedCompany: {
        fetchStatus: commonStatuses.none,
        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.none],
        campaigns: {
            items: [],
            pageIndex: -1,
            fetchStatus: commonStatuses.none,
            fetchStatusDescription: commonStatusesDescriptions[commonStatuses.none],
        },
    },
    selectedCampaign: {
        advertisements: {
            items: [],
            pageIndex: -1,
            fetchStatus: commonStatuses.none,
            fetchStatusDescription: commonStatusesDescriptions[commonStatuses.none],
        },
        postsByAdvertisementIds: {},
        personCredentialsByAdvertisementIds: {}
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMPANIES: {
            return {
                ...initialState,
                fetchStatus: commonStatuses.loading,
                fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
            };
        }
        case actionTypes.FETCH_COMPANIES_SUCCESS: {
            return {
                ...initialState,
                items: action.payload.data,
                fetchStatus: commonStatuses.loaded,
                fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],
            };
        }
        case actionTypes.FETCH_COMPANIES_FAIL:
        case actionTypes.FETCH_COMPANIES_UNSUCCESS: {
            return {
                ...initialState,
                items: [],
                pageIndex: -1,
                fetchStatus: commonStatuses.failed,
                fetchStatusDescription: commonStatusesDescriptions[commonStatuses.failed],
            };
        }
        case actionTypes.FETCH_COMPANY: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    fetchStatus: commonStatuses.loading,
                    fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],

                }
            };
        }
        case actionTypes.FETCH_COMPANY_SUCCESS: {
            if (action.payload.data && action.payload.data.length === 1) {
                return {
                    ...state,
                    selectedCompany: {
                        ...state.selectedCompany,
                        ...action.payload.data[0],
                        fetchStatus: commonStatuses.loaded,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],
                    },
                };
            } else {
                return state;
            }

        }
        case actionTypes.FETCH_COMPANY_FAIL:
        case actionTypes.FETCH_COMPANY_UNSUCCESS: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    fetchStatus: commonStatuses.failed,
                    fetchStatusDescription: commonStatusesDescriptions[commonStatuses.failed],
                }
            };
        }
        case actionTypes.FETCH_CAMPAIGNS: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    campaigns: {
                        items: [],
                        pageIndex: -1,
                        fetchStatus: commonStatuses.loading,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
                    }
                }
            };
        }
        case actionTypes.FETCH_CAMPAIGNS_SUCCESS: {
            const filteredCampaigns = action.payload.data.filter(
              (campaign) => campaign.status !== globalModels.campaignStatusEnum.PreDraft && campaign.status !== globalModels.campaignStatusEnum.Draft
            );

            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    campaigns: {
                        items: filteredCampaigns,
                        pageIndex: -1,
                        fetchStatus: commonStatuses.loaded,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],
                    }
                }
            };
        }
        case actionTypes.FETCH_CAMPAIGNS_FAIL:
        case actionTypes.FETCH_CAMPAIGNS_UNSUCCESS: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    campaigns: {
                        items: [],
                        pageIndex: -1,
                        fetchStatus: commonStatuses.failed,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.failed],
                    }
                }
            };
        }
        case actionTypes.SELECT_CAMPAIGN: {
            return {
                ...state,
                selectedCampaign: {
                    ...action.payload,
                    advertisements: {
                        items: [],
                        pageIndex: -1,
                        fetchStatus: commonStatuses.none,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.none],
                    }
                }
            };
        }
        case actionTypes.FETCH_ADVERTISEMENTS: {
            return {
                ...state,
                selectedCampaign: {
                    ...state.selectedCampaign,
                    advertisements: {
                        items: [],
                        pageIndex: -1,
                        fetchStatus: commonStatuses.loading,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
                    }
                }
            };
        }
        case actionTypes.FETCH_ADVERTISEMENTS_SUCCESS: {
            return {
                ...state,
                selectedCampaign: {
                    ...state.selectedCampaign,
                    advertisements: {
                        items: action.payload.data, //.filter(ad => ad._posts.length > 0),
                        pageIndex: -1,
                        fetchStatus: commonStatuses.loaded,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],
                    }
                }
            };
        }
        case actionTypes.FETCH_ADVERTISEMENTS_FAIL:
        case actionTypes.FETCH_ADVERTISEMENTS_UNSUCCESS: {
            return {
                ...state,
                selectedCampaign: {
                    ...state.selectedCampaign,
                    advertisements: {
                        items: [],
                        pageIndex: -1,
                        fetchStatus: commonStatuses.failed,
                        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.failed],
                    }
                }
            };
        }
        case actionTypes.FETCH_POSTS: {
            const advertisementId = action.payload[globalModels.postFields.advertisementId];

            return {
                ...state,
                selectedCampaign: {
                    ...state.selectedCampaign,
                    postsByAdvertisementIds: {
                        ...state.selectedCampaign.postsByAdvertisementIds,
                        [advertisementId]: {
                            posts: {
                                items: [],
                                pageIndex: -1,
                                fetchStatus: commonStatuses.loading,
                                fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],

                            }
                        }

                    }
                }
            };
        }
        case actionTypes.FETCH_POSTS_SUCCESS_BUFFER_FLUSH_SUCCESS: {
            if (action.payload.data && Object.keys(action.payload.data).length > 0) {
                return {
                    ...state,
                    selectedCampaign: {
                        ...state.selectedCampaign,
                        postsByAdvertisementIds: {
                            ...state.selectedCampaign.postsByAdvertisementIds,
                            ...action.payload.data
                        }
                    }
                };

            } else {
                console.error('No data payload into the dispathed redux action');
                return state;
            }
        }
        case actionTypes.FETCH_PERSON_CREDENTIALS: {
            const advertisementId = action.payload[globalModels.advertisementFields._id];

            return {
                ...state,
                selectedCampaign: {
                    ...state.selectedCampaign,
                    personCredentialsByAdvertisementIds: {
                        ...state.selectedCampaign.personCredentialsByAdvertisementIds,
                        [advertisementId]: {
                            person_credentials: {
                                items: [],
                                pageIndex: -1,
                                fetchStatus: commonStatuses.loading,
                                fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],

                            }
                        }

                    }
                }
            };
        }
        case actionTypes.FETCH_PERSON_CREDENTIALS_SUCCESS_BUFFER_FLUSH_SUCCESS: {
            if (action.payload.data && Object.keys(action.payload.data).length > 0) {
                return {
                    ...state,
                    personCredentialsByAdvertisementIds: {
                        ...state.selectedCampaign.personCredentialsByAdvertisementIds,
                        ...action.payload.data
                    }
                };

            } else {
                console.error('No data payload into the dispathed redux action');
                return state;
            }
        }

        default:
            return state;
    }
};
