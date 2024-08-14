export const PermissionHelper = {
  componentPermissions: {
    'CompaniesComponent': 'readCompanies',
    'CompanyComponent': 'readCampaings',
    'CampaignComponent': 'readCampaings',
  },

  canViewComponent(permissions, component, selectedCompanyId, securityCompanyId) {
    
    if (!permissions.includes('readCompanies'))
      if (selectedCompanyId && selectedCompanyId !== securityCompanyId) {
        return false;
      }

    const requiredPermission = this.componentPermissions[component];
    if (!requiredPermission) {
      return false;
    }

    return permissions.includes(requiredPermission);
  }
};
