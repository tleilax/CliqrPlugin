import Backbone from 'backbone'
import _ from 'underscore'

import Task from './task'

const TasksCollection = Backbone.Collection.extend({

    model: Task,

    url() {
        return cliqr.config.PLUGIN_URL + 'tasks?cid=' + cliqr.config.CID
    },

    comparator(task) {
        return parseInt(task.get('id'), 10)
    }
})

export default TasksCollection
