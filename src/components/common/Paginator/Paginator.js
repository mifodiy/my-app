import React from "react";
import s from "./Paginator.module.css";

export const Paginator = ({totalUsersCount, pageSize, currentPage, onChangeCurrentPage}) => {
    let countPage = Math.ceil(totalUsersCount / pageSize)
    let page = []
    for (let i = 1; i <= countPage; i++) {
        page.push(i)
    }

    return <div>{page.map(p =>
        <span className={currentPage === p && s.currentPage}
              onClick={() => {
                  onChangeCurrentPage(p)
              }}>{p}</span>)}</div>
}