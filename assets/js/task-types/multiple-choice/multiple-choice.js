import Backbone from 'backbone'
import _ from 'underscore'

import AssignmentView from './assignment'
import CreateView from './create'
import EditView from './edit'
import PollView from './poll'
import ShowView from './show'

import MCTask from './task'
import MCResponse from './response'

import mc_css from './multiple-choice.scss'

class MultipleChoice {
    constructor(task) {
        this.task = task
    }

    get id() {
        return 'multiple-choice'
    }

    get icon() {
        return 'assessment'
    }

    get name() {
        return 'Multiple Choice'
    }

    // Ansicht eines Votings einer Frage
    getAssignmentView(voting) {
        return new AssignmentView({ model: this.task, voting, type: this })
    }

    // Details einer Frage /tasks/show/{{id}}
    getShowView() {
        return new ShowView({ model: this.task, type: this })
    }

    // Formular zum Bearbeiten einer Frage /tasks/edit/{{id}}
    getEditView() {
        return new EditView({ model: this.wrapTask(this.task), type: this })
    }

    // Formular zum Anlegen einer Frage
    getCreateView(taskGroup) {
        return new CreateView({ model: this.createTask(), taskGroup, type: this })
    }

    // Formular zum Beantworten einer Frage
    getPollView(voting) {
        return new PollView({ model: this.createResponse(voting), voting, type: this })
    }

    createTask(data) {
        const task = new MCTask()
        _.times(2, () => task.addAnswer())
        return task
    }

    wrapTask(task) {
        return new MCTask(task.attributes)
    }

    createResponse(voting) {
        const response = new MCResponse({ voting_id: voting.id, task_id: voting.getTask().id })
        return response
    }
}

_.extend(MultipleChoice.prototype, Backbone.Events)

export default MultipleChoice