import { db } from "../components/firebase/firebase"

function settings() {

    const resetTodayBest = () => {
        var allDocs = [];
        db.collection("votes").get().then((docs) => {
            docs.forEach((doc) => {
                allDocs.push(doc.id)
            })
            allDocs.forEach(element => {
                db.collection("todayVotes").doc(element).set({
                    coin_votes: 0,
                })
                console.log(element)
            });
        })
        
    }

    return (
        <div>
            <button onClick={() => resetTodayBest()}>Reset Today's Best</button>
        </div>
    )
}

export default settings
