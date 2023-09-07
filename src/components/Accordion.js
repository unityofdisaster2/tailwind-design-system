import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;

        const icon = <span className="text-xl">{isExpanded?  <GoChevronDown/>: <GoChevronLeft /> }</span>

        const handleClick = (nextIndex) => {

            setExpandedIndex((currentExpandedIndex) => {
                if(currentExpandedIndex === nextIndex) {
                    return -1;
                };
                return nextIndex;
            })
        }

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                <div>
                    {isExpanded && <div className="border-b p-5">{item.content}</div>}
                </div>
            </div>
        )
    })
    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>
}