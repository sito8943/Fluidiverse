import React, {useEffect, useState} from "react";

import {RandomPosition} from "../../utils/game";
// import { index, subset, matrix } from "mathjs";

// img
import p1 from "../../sprites/p1.gif";
import p2 from "../../sprites/p2.gif";
import p3 from "../../sprites/p3.gif";
import p4 from "../../sprites/p4.gif";
import p5 from "../../sprites/p5.gif";
import p6 from "../../sprites/p6.gif";
import as1 from "../../sprites/as1.gif";
import as2 from "../../sprites/as2.gif";
import dh1 from "../../sprites/dh1.gif";
import st1 from "../../sprites/st1.gif";

// context
import {useUnitCard} from "../../context/UnitCard";
import {useRightSidebar} from "../../context/RightSidebarProvider";

// components
import StaticUnitCard from "../../components/card/StaticUnitCard";
import Sidebar from "../../components/sidebar/Sidebar";
import Board from "../../components/board/Board";

import back from "../../sprites/SpaceBackground.png";

// styles
import "./style.scss";

import AtomicBot from "../../models/atomicBot";
import Perception from "../../models/Perception";
import InnerState from "../../models/InnerState";
import Action from "../../models/Action";

const E = ["Nada", "Mineral"]; // environment states
const P = [new Perception("Nada", "Nada"), new Perception("Mineral", "Mineral")]; // perceptions
const I = [new InnerState("Buscando"), new InnerState("Recogiendo")]; // inner states
const A = [new Action("Buscando", "Buscar"), new Action("Recogiendo", "Recoger")]; // actions
const links = {
        "Buscando": {
            "Nada": {
                next: "Buscando"
            },
        },
        "Recogiendo": {
            "Mineral": {
                next: "Recogiendo"
            },
        },
    }
;
const initial = {i: I[0]};

const MyBot = new AtomicBot(E, P, I, A, links, initial);

const units = [
    {
        id: 0,
        type: 2,
        img: p1,
        name: "Planeta 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 1,
        type: 2,
        img: p2,
        name: "Planeta 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 2,
        type: 2,
        img: p3,
        name: "Planeta 3",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 3,
        type: 2,
        img: p4,
        name: "Planeta 4",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 4,
        type: 2,
        img: p5,
        name: "Planeta 5",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 5,
        type: 2,
        img: p6,
        name: "Planeta 6",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 6,
        type: 3,
        img: dh1,
        name: "Agujero Negro",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 7,
        type: 4,
        img: st1,
        name: "Estrella",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 8,
        type: 4,
        img: as1,
        name: "Asteroide 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
    {
        id: 9,
        type: 4,
        img: as2,
        name: "Asteroide 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
    },
];

const Main = (props) => {
    const {unitCardState, setUnitCardState} = useUnitCard();
    const {rightSidebarState, setRightSidebarState} = useRightSidebar();

    const [steps, setSteps] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [generated, setGenerated] = useState(false);
    const [playerPosition, setPlayerPosition] = useState({});

    const generate = () => {
        setPlayerPosition(RandomPosition(10, 10));
        const worlds = [];
        units.forEach((item) => {
            const position = RandomPosition(10, 10);
            const {rx, ry} = position;
            const {type, img, id} = item;
            const newUnit = {id, type, img, x: rx, y: ry};
            worlds.push(newUnit);
        });
        setPlanets(worlds);
        setGenerated(true);
    };

    useEffect(() => {
        console.log("main", unitCardState);
        if (unitCardState.id && unitCardState.visible) {
            const {type, img, name, description} =
                units[unitCardState.id.substring(1)];
            setUnitCardState({type: "set", typeA: type, img, name, description});
            setRightSidebarState({type: "show"});
        } else setRightSidebarState({type: "hide"});
    }, [unitCardState.visible]);

    useEffect(() => {
        if (playerPosition.rx) {
            //setXPlayer((playerPosition.rx + 1) * 60 - 28);
            //setYPlayer((playerPosition.ry + 1) * 60 - 13);
        }
    }, [playerPosition]);

    useEffect(() => {
        console.log(MyBot.See("Nada"));
    }, [])

    return (
        <div
            style={{
                backgroundImage: `url(${back})`,
                height: "100vh",
                width: "100vw",
            }}
        >
            <div className="main-screen" style={{display: "flex"}}>
                <div>
                    <button onClick={generate}>Hola</button>
                    <ul>
                        {steps.map((item, i) => {
                            return <li key={`li${i}`}>{`${item.rx}, ${item.ry}`}</li>;
                        })}
                    </ul>
                </div>

                {generated && <Board units={planets} lx={10} ly={10}/>}

                <Sidebar>
                    <StaticUnitCard useCardContext/>
                </Sidebar>
            </div>
        </div>
    );
};

export default Main;
