import { RequesterMethodEnum, RequesterServiceModel } from '../utils/types';

interface Services {
    getJobSearch(): RequesterServiceModel;
}

const services: Services = {
    getJobSearch() {
      return {
        method: RequesterMethodEnum.GET,
        endpoint: "",
      };
    },
};

export default services;