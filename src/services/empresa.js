import api from './api';

class EmpresaService {


  static getEmpresa() {
    return api.get('/empresa')
  }
  static postEmpresa(data) {
    
    return api.post('/empresa', data)
  }
  static getEmpresaById(id) {
    return api.get(`/empresa/${id}`)
  }

}
export default EmpresaService
