export const ACTIONTYPE={
	UPDATENAME:'UPDATENAME',
	UPDATEADDRESS:'UPDATEADDRESS',
	ADDTEAMS:'ADDTEAMS'
}

export function UpdateName(name){
	type:ACTIONTYPE.UPDATENAME,
	name
}

export function UpdateAddress(address){
	type:ACTIONTYPE.UPDATEADDRESS,
	address
}

export function addTeams(teamlist){
	type:ACTIONTYPE.ADDTEAMS,
	teamlist
}