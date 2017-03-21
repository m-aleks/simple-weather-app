import { REMOVE_LOCATION } from '../constants/actionTypes'

export default function removeLocation(id) {
	return {
		type: REMOVE_LOCATION,
		payload: id
	}
}