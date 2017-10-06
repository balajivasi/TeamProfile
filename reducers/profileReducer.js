
function profileReducer(state=[], action){
	switch(action.type){
		case 'UPDATENAME':
			let NewName=Object.assign({},state.configData,{"name":action.name})
			return {configData:NewName}

		case 'UPDATEADDRESS':
			let newAddress=Object.assign({},state.configData,{"address":action.address})
			return {configData:newAddress}

		case 'ADDTEAMS':
			return state

		case 'SHOWHIDE':
			let show=Object.assign({},state.configData,{"showLightbox":action.flag})
			return  { configData:show };

		case 'SHOWEDITPAGE':
			let showName=Object.assign({},state.configData,{"showName":action.id})
			return  { configData:showName };

		default:
			return state;
	}
}

export default profileReducer;