import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { AppDispatch, RootState } from './redux/store';
import { goToLog, restartTheGame } from './redux/slices/game.slice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Accordion } from 'react-bootstrap';
import TableBoard from './componentes/Table';
     
function App() {
  const { game, logs } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h1 className='mb-3 mt-0'>Jogo da Velha</h1>
      <h3>{game.statusGame}</h3>
      <Row>
        <Col className='d-flex flex-column align-items-end'>
          <TableBoard />
          <button onClick={() => dispatch(restartTheGame())} style={{color: "#14bdac"}}>Reiniciar o jogo</button>
        </Col>
        <Col>
          <Accordion flush>
            <Accordion.Item eventKey = "0">
              <Accordion.Header>
                Histórico
              </Accordion.Header>
              <Accordion.Body>
                <ul style={{listStyleType: "none"}}>
                  {logs.map((game, index) => {
                    if (index == 0) return (
                      <li>
                        <button 
                          onClick={() => dispatch(goToLog(game))}>Início do jogo</button></li>);
                    return (<li><button onClick={() => dispatch(goToLog(game))}>{`Jogada número #${index}`}</button></li>);
                    }
                  )}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </>
  );
}

export default App
