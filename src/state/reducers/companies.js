import * as globalModels from "influencers-models";
import { actionTypes } from "../actionTypes";
import { commonStatusesDescriptions, commonStatuses } from "../models/common";

const initialState = {
    companies: {
        items: [],
        pageIndex: -1,
        status: commonStatuses.none,
        statusDescription: commonStatusesDescriptions[commonStatuses.none],
    },
    selectedCompany: {
        status: commonStatuses.none,
        statusDescription: commonStatusesDescriptions[commonStatuses.none],
        campaigns: {
            items: [],
            pageIndex: -1,
            status: commonStatuses.none,
            statusDescription: commonStatusesDescriptions[commonStatuses.none],
        },
    },
    selectedCampaign: {
        advertisements: {
            items: [],
            pageIndex: -1,
            status: commonStatuses.none,
            statusDescription: commonStatusesDescriptions[commonStatuses.none],
        },
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMPANIES: {
            return {
                ...initialState,
                companies: {
                    ...initialState.companies,
                    status: commonStatuses.loading,
                    statusDescription: commonStatusesDescriptions[commonStatuses.loading],
                }
            };
        }
        case actionTypes.FETCH_COMPANIES_SUCCESS: {
            return {
                ...initialState,
                companies: {
                    ...state.companies,
                    items: action.payload.data,
                    status: commonStatuses.loaded,
                    statusDescription: commonStatusesDescriptions[commonStatuses.loaded],
                },
            };
        }
        case actionTypes.FETCH_COMPANIES_FAIL:
        case actionTypes.FETCH_COMPANIES_UNSUCCESS: {
            return {
                ...initialState,
                companies: {
                    items: [],
                    pageIndex: -1,
                    status: commonStatuses.failed,
                    statusDescription: commonStatusesDescriptions[commonStatuses.failed],

                }
            };
        }
        case actionTypes.FETCH_COMPANY: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    status: commonStatuses.loading,
                    statusDescription: commonStatusesDescriptions[commonStatuses.loading],

                }
            };
        }
        case actionTypes.FETCH_COMPANY_SUCCESS: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    ...action.payload.data,
                    status: commonStatuses.loaded,
                    statusDescription: commonStatusesDescriptions[commonStatuses.loaded],
                },
            };
        }
        case actionTypes.FETCH_COMPANY_FAIL:
        case actionTypes.FETCH_COMPANY_UNSUCCESS: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    status: commonStatuses.failed,
                    statusDescription: commonStatusesDescriptions[commonStatuses.failed],
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
                        status: commonStatuses.loading,
                        statusDescription: commonStatusesDescriptions[commonStatuses.loading],
                    }
                }
            };
        }
        case actionTypes.FETCH_CAMPAIGNS_SUCCESS: {
            return {
                ...state,
                selectedCompany: {
                    ...state.selectedCompany,
                    campaigns: {
                        items: action.payload.data,
                        pageIndex: -1,
                        status: commonStatuses.loaded,
                        statusDescription: commonStatusesDescriptions[commonStatuses.loaded],
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
                        status: commonStatuses.failed,
                        statusDescription: commonStatusesDescriptions[commonStatuses.failed],
                    }
                }
            };
        }
        case actionTypes.SELECT_CAMPAIGN: {
            return {
                ...state,
                selectedCampaign: {
                    ...action.payload.data,
                    advertisements: {
                        items: [],
                        pageIndex: -1,
                        status: commonStatuses.loaded,
                        statusDescription: commonStatusesDescriptions[commonStatuses.loaded],
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
                        status: commonStatuses.loading,
                        statusDescription: commonStatusesDescriptions[commonStatuses.loading],
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
                        items: action.payload.data,
                        pageIndex: -1,
                        status: commonStatuses.loaded,
                        statusDescription: commonStatusesDescriptions[commonStatuses.loaded],
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
                        status: commonStatuses.failed,
                        statusDescription: commonStatusesDescriptions[commonStatuses.failed],
                    }
                }
            };
        }
        case actionTypes.FETCH_POSTS: {
            const campaignId = action.payload.data[globalModels.postFields.campaignId];

            return {
                ...state,
                selectedCampaign: {
                    ...state.selectedCampaign,
                    advertisements: {
                        ...state.selectedCampaign.advertisements,
                        items: state.selectedCampaign.advertisements.map(ad => {
                            if (ad[globalModels.advertisementFields._id !== campaignId]) {
                                return {
                                    ...ad
                                };
                            } else {
                                return {
                                    ...ad,
                                    posts: {
                                        items: [],
                                        pageIndex: -1,
                                        status: commonStatuses.loading,
                                        statusDescription: commonStatusesDescriptions[commonStatuses.loading],

                                    }
                                };
                            }
                        })
                    }
                }
            };
        }
        case actionTypes.FETCH_POSTS_SUCCESS: {
            if (action.payload.data && action.payload.data.lenght > 0) {
                const campaignId = action.payload.data[0][globalModels.postFields.campaignId];

                return {
                    ...state,
                    selectedCampaign: {
                        ...state.selectedCampaign,
                        advertisements: {
                            ...state.selectedCampaign.advertisements,
                            items: state.selectedCampaign.advertisements.map(ad => {
                                if (ad[globalModels.advertisementFields._id !== campaignId]) {
                                    return {
                                        ...ad
                                    };

                                } else {
                                    return {
                                        ...ad,
                                        posts: {
                                            items: action.payload.data,
                                            pageIndex: -1,
                                            status: commonStatuses.loaded,
                                            statusDescription: commonStatusesDescriptions[commonStatuses.loaded],
    
                                        }
                                    };
                                }
                            })
                        }
                    }
                };

            } else {
                return state;
            }
        }
        case actionTypes.FETCH_POSTS_FAIL:
        case actionTypes.FETCH_POSTS_UNSUCCESS: {
            const campaignId = action.payload.data[globalModels.postFields.campaignId];

            return {
                ...state,
                selectedCampaign: {
                    ...state.selectedCampaign,
                    advertisements: {
                        ...state.selectedCampaign.advertisements,
                        items: state.selectedCampaign.advertisements.map(ad => {
                            if (ad[globalModels.advertisementFields._id !== campaignId]) {
                                return {
                                    ...ad
                                };

                            } else {
                                return {
                                    ...ad,
                                    posts: {
                                        items: [],
                                        pageIndex: -1,
                                        status: commonStatuses.failed,
                                        statusDescription: commonStatusesDescriptions[commonStatuses.failed],

                                    }
                                };
                            }
                        })
                    }
                }
            };
        }

        default:
            return state;
    }
};
