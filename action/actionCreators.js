export const ACTIONTYPE={
	UPDATENAME:'UPDATENAME',
	UPDATEADDRESS:'UPDATEADDRESS',
	ADDTEAMS:'ADDTEAMS',
	SHOWHIDE:'SHOWHIDE',
	SHOWEDITPAGE:'SHOWEDITPAGE'
}

export function UpdateName(name){
	return {
		type:ACTIONTYPE.UPDATENAME,
		name
	}
}

export function UpdateAddress(address){
	return {
		type:ACTIONTYPE.UPDATEADDRESS,
		address
	}
}

export function addTeams(teamlist){
	return {
		type:ACTIONTYPE.ADDTEAMS,
		teamlist
	}
}

export function showHideLightBox(flag){
	return {
		type:ACTIONTYPE.SHOWHIDE,
		flag
	}
}

export function showDetailsEdit(id){
	return{
		type:ACTIONTYPE.SHOWEDITPAGE,
		id
	}
}