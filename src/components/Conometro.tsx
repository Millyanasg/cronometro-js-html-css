import React from "react";
import ReactDOM from "react-dom";
import Style from "./Conometro.module.scss";

const Conometro = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);
    const [laps, setLaps] = React.useState([]);
    const [totalTime, setTotalTime] = React.useState(0);
    React.useEffect(() => {
        let interval: any = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!timerOn) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn]);

    return (
        <>
            <div className={Style.conometro}>
                <div className={Style.Botoes}>
                    {
                        timerOn === false ? (
                            <button onClick={() => setTimerOn(true)}>Iniciar</button>
                        ) : (
                            <button onClick={() => setTimerOn(false)}>Pausar</button>
                        )
                    }
                    <button onClick={() => {
                        if(timerOn === false){
                            return;
                        }
                        const lap = time;
                        setTotalTime(totalTime + lap);
                        setLaps([...laps, lap]);
                        setTime(0);
                    }}>Reiniciar</button>
                </div>
                <div className={Style.tempo}>
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div className={Style.totalTime}>
                    {
                        laps.length > 0 ? (
                            <div>
                                <span>Total:</span>
                                <span>{("0" + Math.floor((totalTime / 60000) % 60)).slice(-2)}:</span>
                                <span>{("0" + Math.floor((totalTime / 1000) % 60)).slice(-2)}:</span>
                                <span>{("0" + ((totalTime / 10) % 100)).slice(-2)}</span>
                            </div>
                        ) : (
                            <div>
                                <span>Total:</span>
                                <span>00:</span>
                                <span>00:</span>
                                <span>00</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={Style.laps}>
                <h1>Voltas</h1>
                <ol>
                    {laps.map((lap, index) => (
                        <li key={index}>
                            <span>
                                {index + 1}{"º volta:"} 
                            </span>
                            <span>{("0" + Math.floor((lap / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((lap / 1000) % 60)).slice(-2)}:</span>
                            <span>{("0" + ((lap / 10) % 100)).slice(-2)}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Conometro;
