import Filter from "./Filter";
import Hog from "./Hog";
import { useState } from "react";
import HogForm from "./HogForm";

function HogList({ hogs }) {
    const [showGreased, setShowGreased] = useState(true)
    const [sortBy, setSortBy] = useState("weight")
    const [hogState, setHogState] = useState(hogs)

    function handleAddHog(newHog) {
        setHogState([newHog,...hogState])
    }
    //true - show greeze hogs
    //false - show all hogs
    //Turn hog tiles into an array => [<Hog>]
    const filteredHogs = hogState.filter((hog) => {
        if (showGreased) {
            // IF showGreased IS TRUE, RETURN ALL THE HOGS THAT ARE GREEZED
            return hog.greased
        } else {
            return true
        }
    })
    const sortedHogs = filteredHogs.sort((hogA, hogB) => {
        if (sortBy === "name") {
            //ALPHABETICALLY SORTING(STRINGS)
            return hogA.name.localeCompare(hogB.name)
        } else if (sortBy === "weight") {
            //ASCENDING ORDER OF WEIGHTS(NUMBERS)
            return hogA.weight - hogB.weight
        }
        // var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        // var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        // if (nameA < nameB) {
        //   return -1;
        // }
        // if (nameA > nameB) {
        //   return 1;
        // }

        // // names must be equal
        // return 0;
    });
    const tiles = sortedHogs.map(hog => <Hog key={hog.name} hog={hog} />)


    return (
        <div>
            <h1>Hog List</h1>
            <HogForm onAddHog={handleAddHog}/>
            <Filter
                showGreased={showGreased}
                onShowGreased={setShowGreased}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            {tiles}
        </div>
    )
}

export default HogList;



//WE'VE USED THE STATES TO FILTER OUR DATA 