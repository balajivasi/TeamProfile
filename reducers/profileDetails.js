function profileDetails(state=[],action){
	switch(action.type){
		case 'UPDATENAME':
			return state;
		case 'UPDATEADDRESS':
			return state;
		case 'ADDTEAMS':
			return state;
		default:
			return state;
	}
}

export default profileDetails;