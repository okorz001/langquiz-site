import {createSelector} from 'reselect'

export function getRoute(state) {
    return state.router.route
}

export function getLanguages(state) {
    return state.languages
}

export const getLanguagesById = createSelector(
    getLanguages,
    languages => {
        const ret = {}
        languages.forEach(it => ret[it.id] = it)
        return ret
    }
)

export function getCourses(state) {
    return state.courses
}

export const getCoursesDisplay = createSelector(
    getCourses,
    getLanguagesById,
    (courses, languages) =>
        courses
            .map(it => Object.assign({
                name: languages[it.learning].name,
            }, it))
            .sort((a, b) => a.name.localeCompare(b.name))
)

export function getCurrentCourse(state) {
    return state.currentCourse
}
