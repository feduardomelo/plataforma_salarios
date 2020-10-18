import api from './api';

class AvaliacaoService {


  static postAvaliacao(data) {
    
    return api.post('/avaliacao', data)
  }
}
export default AvaliacaoService
