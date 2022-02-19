import { Container } from "./style";


export function TansactionTable(){
      return (
            <Container>
                  <table>
                        <thead>
                              <tr>
                                    <th>Título</th>
                                    <th>Valor</th>
                                    <th>Categoria</th>
                                    <th>Data</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>Desenvolvimento de WebSite</td>
                                    <td className="deposit">R$ 12000,00</td>
                                    <td>Desenvolvimento</td>
                                    <td>20/02/2021</td>
                              </tr>
                              <tr>
                                    <td>Aluguel</td>
                                    <td className="withdraw">-R$ 12000,00</td>
                                    <td>Desenvolvimento</td>
                                    <td>20/02/2021</td>
                              </tr>
                              
                        </tbody>
                  </table>
            </Container>
      )
}