import { Summary } from "../Summary";
import { Container } from "./style";
import { TansactionTable } from "../TransactionTable";

export function Dashboard(){
      return (
            <Container>
                  <Summary/>
                  <TansactionTable />
            </Container>
      )
}