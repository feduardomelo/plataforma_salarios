import api from './api';

class EmpresaService {


  static getEmpresa() {
    return api.get('/empresa')
  }
}
export default EmpresaService
