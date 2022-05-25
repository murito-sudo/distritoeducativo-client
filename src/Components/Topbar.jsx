import './topbar.css';
import {CardTravel} from '@material-ui/icons';
import {Phone} from '@material-ui/icons';


export default function Main(){
	return(
			<div className="topBar">
					<div className="Info">
						<div className="InfoItem">
							<div className="InfoItemArt">
								<Phone className="InfoIcon"/>
								<span className="InfoText">+1 (809) 551 6633</span>


							</div>
							

						</div>

						<div className="InfoItem">
							<div className="InfoItemArt">
								<CardTravel className="InfoIcon" />
								<span className="InfoText"> Cristiancasablanca@whattobuy.com</span>


							</div>
							

							
						</div>

					</div>

			</div>
			

		)


}
