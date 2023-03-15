import { AddressModal, CompanyModal, RoleModal, UserModal } from 'classes/classes'
import { getValidatedData } from 'constants/constants'

const getConvertedUser = (obj) => {

    if(getValidatedData(obj, 'object', true)){

        let address = new AddressModal();
        let company = new CompanyModal();
        let role = new RoleModal()

        if(getValidatedData(obj.role, 'object', true)){
            role.id = getValidatedData(obj.role.id, 'number'),
            role.name = getValidatedData(obj.role.name);
            role.active = getValidatedData(obj.role.active,'boolean');
        }

        if(getValidatedData(obj.address, 'object', true)){
            address.id = getValidatedData(obj.address.id, 'number'),
            address.addressType = getValidatedData(obj.address.addressType);
            address.altPhoneNumber = getValidatedData(obj.address.altPhoneNumber);
            address.fax = getValidatedData(obj.address.fax);
            address.street = getValidatedData(obj.address.street);
            address.country = getValidatedData(obj.address.country);
            address.landmark = getValidatedData(obj.address.landmark);
            address.city = getValidatedData(obj.address.city);
            address.pincode = getValidatedData(obj.address.pincode);
            address.state = getValidatedData(obj.address.state);
        }

        if(getValidatedData(obj.company, 'object', true)){
            company.id = getValidatedData(obj.company.id, 'number'),
            company.name = getValidatedData(obj.company.name),
            company.accountNumber = getValidatedData(obj.company.accountNumber),
            company.bankName = getValidatedData(obj.company.bankName),
            company.gstEnabled = getValidatedData(obj.company.gstEnabled, 'boolean'),
            company.gstNumber = getValidatedData(obj.company.gstNumber),
            company.ifsc = getValidatedData(obj.company.ifsc),
            company.panCardNumber = getValidatedData(obj.company.panCardNumber),
            company.pinCode = getValidatedData(obj.company.pinCode),
            company.individual = getValidatedData(obj.company.individual, 'boolean'),
            company.type = getValidatedData(obj.company.type),
            company.website = getValidatedData(obj.company.website),
            company.active = getValidatedData(obj.company.active, 'boolean')
        }

        return new UserModal(
            getValidatedData(obj.id, 'number'),
            getValidatedData(obj.name),
            getValidatedData(obj.email),
            getValidatedData(obj.phoneNumber),
            getValidatedData(obj.aadharCardNumber),
            role,
            getValidatedData(obj.active, 'boolean'),
            getValidatedData(obj.password),
            address,
            company,
            getValidatedData(obj.guid),
            getValidatedData(obj.latitude),
            getValidatedData(obj.longitude),
            getValidatedData(obj.deviceId),
            getValidatedData(obj.isTrackable,'boolean'),
            getValidatedData(obj.authorities,'array'),
        )
    }

    return new UserModal();
}

export default getConvertedUser