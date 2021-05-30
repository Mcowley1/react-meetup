function MeetupItem(props) {
    return (
        <li>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <h3>TITLE</h3>
                <address>ADDRESS</address>
                <p>description</p>
            </div>
            <div>
                <button>To Favorites</button>
            </div>
        </li>
    );
}

export default MeetupItem;