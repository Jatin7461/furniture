interface Props {
    name: string,
    year: string,
    number: string,
}

const ChairType = ({ name, year, number }: Props) => {
    return <div className={`chair-type chair${number}`}>
        <div className="first-row">
            <p className="chair-name">{name}</p>
            <p className="chair-year">{year}</p>
        </div>
        <div className="second-row">
            <p className="us chair-info">US/WW</p>
            <p className="chair-info">Armchair</p>
            <p className="chair-info">Interior</p>
        </div>

    </div>
}

export default ChairType