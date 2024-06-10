import { useState } from "react";

const AccordionCard = ({ id, name, content, see, boolvalue, hide, boolvaluemultiple, seeMultiple, setSeeMultiple, setHideMultiple }) => {
    return (
        <>
            <h1>{name}</h1>
            {!boolvaluemultiple ? (
                <>
                    {boolvalue ? (
                        <button onClick={hide}>Hide</button>
                    ) : (
                        <button onClick={see}>Show</button>
                    )}
                    {boolvalue && <h2>{id}</h2>}
                    {boolvalue && <p>{content}</p>}
                </>
            ) : (
                <>
                    {seeMultiple ? (
                        <button onClick={setHideMultiple}>Hide</button>
                    ) : (
                        <button onClick={setSeeMultiple}>Show</button>
                    )}
                    {seeMultiple && (
                        <>
                            <h2>{id}</h2>
                            <p>{content}</p>
                        </>
                    )}
                </>
            )}
        </>
    );
};

const Accordion = () => {
    const [acc, setAcc] = useState(null);
    const [seeArray, setSeeArray] = useState([]);
    const [isMulti, setIsMulti] = useState(false);

    const handleIsThere = (id) => {
        return seeArray.includes(id);
    }

    const handleAdd = (id) => {
        setSeeArray(a => [...a, id]);
    }

    const handleRemove = (id) => {
        setSeeArray(a => a.filter((item) => item !== id));
    }

    return (
        <div>
            {!isMulti ? (
                <button onClick={() => setIsMulti(true)}>See Multiple</button>
            ) : (
                <button onClick={() => setIsMulti(false)}>See one</button>
            )}

            <AccordionCard
                name="Piyush Chowdhury"
                id={1}
                content="Piyush is a very hardworking student who works hard to learn web development and wants to be proficient in DSA."
                see={() => setAcc(1)}
                hide={() => setAcc(null)}
                boolvalue={acc === 1}
                boolvaluemultiple={isMulti}
                seeMultiple={handleIsThere(1)}
                setSeeMultiple={() => handleAdd(1)}
                setHideMultiple={() => handleRemove(1)}
            />

            <AccordionCard
                name="Kirti Sharma"
                id={2}
                content="Kirti is a very sincere and caring person, she is a very good human."
                see={() => setAcc(2)}
                hide={() => setAcc(null)}
                boolvalue={acc === 2}
                boolvaluemultiple={isMulti}
                seeMultiple={handleIsThere(2)}
                setSeeMultiple={() => handleAdd(2)}
                setHideMultiple={() => handleRemove(2)}
            />

            <AccordionCard
                name="Vinayak Narayan Srivastava"
                id={3}
                content="Vinayak is a very caring and good friend, he has profound knowledge in history and politics."
                see={() => setAcc(3)}
                hide={() => setAcc(null)}
                boolvalue={acc === 3}
                boolvaluemultiple={isMulti}
                seeMultiple={handleIsThere(3)}
                setSeeMultiple={() => handleAdd(3)}
                setHideMultiple={() => handleRemove(3)}
            />
        </div>
    );
}
export default Accordion;
