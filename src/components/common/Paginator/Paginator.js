import React, {useState} from "react";
import s from "./Paginator.module.css";

export const Paginator = ({totalItemCount, pageSize, currentPage, onChangeCurrentPage, countPortion = 10}) => {
    let countPage = Math.ceil(totalItemCount / pageSize)
    let page = []
    for (let i = 1; i <= countPage; i++) {
        page.push(i)
    }

    let countPortions =  Math.ceil(countPage/countPortion)
    console.log(countPortions)
    let [portionsNumber, setPortionsNumber] = useState(1)
    let leftBorderPortions = (portionsNumber -1) * countPortion + 1
    let rightBorderPortion = portionsNumber * countPortion

    return <div>{portionsNumber > 1 && <button onClick={() => setPortionsNumber(portionsNumber - 1)}>Left</button>}
        {page.filter(p => p >= leftBorderPortions && p <= rightBorderPortion).
        map(p =>
        <span className={currentPage === p && s.currentPage}
              onClick={() => {
                  onChangeCurrentPage(p)
              }}>{p}</span>)}
        {countPortions > portionsNumber && <button onClick={() => setPortionsNumber(portionsNumber + 1)}>right</button>}
    </div>
}