import * as globalModels from "influencers-models";

const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasMinLength = password.length >= 8;
  return hasUpperCase && hasMinLength;
}

const validatePasswordSignUp = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 8;
  return hasUpperCase && hasNumber && hasSpecialChar && hasMinLength;
}

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

const validateCellPhone =(cellPhone) => {
    const cellPhonePattern = /^\+?\d+$/;
    return !cellPhone.length === 0 || cellPhonePattern.test(cellPhone);
}

export const validateField = (component, fieldName, errors, value, password = undefined) => {
    switch(fieldName) {
      case [globalModels.personFields.email].toString():
        errors.emailOk = !!value.trim() && !!validateEmail(value);
        break;
      case [globalModels.personFields.password].toString():
        if (component === 'login') errors.passwordOk = !!value.trim() && !!validatePassword(value);
        else if (component === 'signUp') errors.passwordOk = !!value.trim() && validatePasswordSignUp(value);
        break;
     case [globalModels.personFields.firstName].toString():
        errors.firstNameOk = !!value.trim();
        break;
      case [globalModels.personFields.lastName].toString():
        errors.lastNameOk = !!value.trim();
        break;
      case [globalModels.companyFields.cellPhone].toString():
        errors.cellPhoneOk = validateCellPhone(value);
        break;
      case 'companyName':
        errors.companyNameOk = !!value.trim();
        break;
      case 'confirmPassword':
        errors.confirmPasswordOk = !!(value === password);
        break;
      case 'isAgreed':
        errors.isAgreedOK = value;
        break;
      default:
        break;
    }

    const hasErrors = Object.values(errors).some(error => !error);
    errors.hasErrors = hasErrors;

    return { errors };
}

export const validateLoginFields = async (state) => {
    let errors = state.errors;
    errors = {
      emailOk: !!state.email.trim() && !!validateEmail(state.email),
      passwordOk: !!state.password.trim() && !!validatePassword(state.password),
    };

    const hasErrors = Object.values(errors).some(error => !error);
    errors.hasErrors = hasErrors;
    return { errors: {...state.errors, ...errors} };
};

export const validateSignUpFields = async (isCreatingUser, state) => {
  let errors = state.errors;
  if (isCreatingUser) {
    errors = {
      emailOk: !!state.email.trim() && !!validateEmail(state.email),
      passwordOk: !!state.password.trim() && !!validatePasswordSignUp(state.password),
      confirmPasswordOk: !!(state.confirmPassword === state.password),
    };
  } else {
    errors = {
      companyNameOk: !!state.companyName.trim(),
      isAgreedOK: state.isAgreed,
      cellPhoneOk: validateCellPhone(state.cellPhone),
    };
  }
  const hasErrors = Object.values(errors).some(error => !error);
  errors.hasErrors = hasErrors;
  return { errors: {...state.errors, ...errors} };
};

export const validateEditUserFields = async (state) => {
    let errors = state.errors;
    errors = {
      firstNameOk: !!state.firstName.trim(),
      lastNameOk: !!state.lastName.trim(),
    };

    const hasErrors = Object.values(errors).some(error => !error);
    errors.hasErrors = hasErrors;

    return { errors: {...state.errors, ...errors} };
};

export const validateEditCompanyFields = async (state) => {
    let errors = state.errors;
    errors = {
      companyNameOk: !!state.companyName.trim(),
      cellPhoneOk: validateCellPhone(state.cellPhone.trim()),
    };

    const hasErrors = Object.values(errors).some(error => !error);
    errors.hasErrors = hasErrors;

    return { errors: {...state.errors, ...errors} };
};