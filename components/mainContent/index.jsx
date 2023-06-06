import mainContentStyles from "./mainContent.module.css";

export const MainContent = () => {
    return(
        <div className={mainContentStyles.maincontent}>
            <div className={mainContentStyles.container}>
                <div className={mainContentStyles.about}>
                    <h2>Про нас:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis efficitur justo. Nunc erat odio, cursus vel augue non, tincidunt aliquam erat. Fusce et lectus pharetra, mattis ligula sed, venenatis nisl. Curabitur in ullamcorper mauris. Pellentesque in condimentum erat. Nam vitae pellentesque nisl, et ullamcorper urna. Vestibulum felis dui, egestas vel mi non, volutpat iaculis ipsum. Nulla tellus nulla, viverra ut tristique rutrum, sagittis in est.</p>
                </div>
	 	        <img src="images/logo.png"/>
	 	    </div>
	 	    <div className={mainContentStyles.distance}>
                <h2>Сети</h2>
	 	    </div> 
        </div>
    )
    };