import React, {useState} from "react"
import Table from "./table"

const RenderTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const data = [
        { type: "sedan", name: "model S", price: 70000 },
        { type: "truck", name: "semi", price: 100000 },
        { type: "sedan", name: "model 3", price: 35000 },
        { type: "sport", name: "roadster", price: 300000 },
        { type: "atv", name: "atv", price: 10000 },
        { type: "mini-suv", name: "model Y", price: 40000 },
        { type: "mini-sub", name: "model X", price: 100000 },
        { type: "truck", name: "cybertruck", price: 45000 }
      ];


  const renderPageNumbers = () => {

    return Array(Math.ceil(data.length / 2)).fill(0).map((_, pageNum) => (
        <button
        onClick={() => { 
            setCurrentPage(pageNum + 1) 
        }}
        value={pageNum + 1}
      >
        {pageNum + 1}
      </button>
    ))
  };

return (
    <div>
<Table data={data.slice(2 * currentPage - 2, 2 * currentPage)}></Table>
    <div>{renderPageNumbers()}</div>
    </div>
)
}

export default RenderTable