interface Props {
    name: string,
    year: string
}

const ChairType = ({ name, year }: Props) => {
    return <div className="chair-type">
        <div className="first-row">
            <p className="chair-name">{name}</p>
            <p className="chair-year">{year}</p>
        </div>
        <div className="second-row">
            <p className="us">US/WW</p>
            <p>Armchair</p>
            <p>Interior</p>
        </div>

    </div>
}

export default ChairType