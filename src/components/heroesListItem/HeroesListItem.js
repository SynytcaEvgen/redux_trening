
const HeroesListItem = ({name, description, element, onDelete}) => {

    let elementClassName;

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger';
            break;
        case 'water':
            elementClassName = 'bg-primary';
            break;
        case 'wind':
            elementClassName = 'bg-success';
            break;
        case 'earth':
            elementClassName = 'bg-secondary';
            break;
        default:
            elementClassName = 'bg-warning';
    }

    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName} bg-gradient`}>
            <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span onClick={onDelete} className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" className="btn-close btn-close" aria-label="Close"></button>
            </span>
        </li>
    )
}

export default HeroesListItem;