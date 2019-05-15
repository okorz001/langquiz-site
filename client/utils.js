export function fuzzySearch(term, candidate) {
	if (!term) {
		return true
	}
	if (!candidate) {
		return false
	}
	return candidate.search(term) != -1
}
