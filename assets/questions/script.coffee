# (function ($) {
#     /*
#     $(document).ready(function() {
#         var resultsContainer = $("#cliqr_vote_results");
#         if(resultsContainer.size() > 0) {
#             // load vote results every 10 seconds
#             var resultsUrl = location.pathname.replace(/show/, "results") +
#                 location.search;
#             refreshContainer(resultsContainer, resultsUrl, 10000);
#         }
#     });
#
#     // replace the contents of a container every timeout miliseconds with the
#     // response when the given url is requested
#     function refreshContainer(container, url, timeout) {
#         $.get(url, "", function(data) {
#             container.html(data);
#         });
#         window.setTimeout(function() {
#             refreshContainer(container, url, timeout);
#         }, timeout);
#     }
#      */
# }(jQuery));

getTemplate = _.memoize (id) ->
  _.template $("script#template-#{id}").html()

jQuery ($) ->

  addNewChoice = (event) ->
    new_choice = $(event.target).closest(".choices").find(".choice-new")
    $(getTemplate("vote-form-choice")()).insertBefore(new_choice).find("input").focus()

  # vote form
  $("form.vote-form")

    .on "click", "a.close", (event) ->
      choice_input = $(event.target).closest(".choice-input")
      if choice_input.siblings(".choice-input").length
        choice_input.remove()
      else
        choice_input.effect "shake", 50

    .on "click", ".choice-new", (event) ->
      addNewChoice(event)

    .on "keydown", "input.choice", (event) ->

      if event.which == 13 \    # enter
         or event.which == 38 \ # arrow_up
         or event.which == 40 \ # arrow_down
         or event.which == 9 and !event.shiftKey # tab

        inputs = $(event.target).closest(".choices").find("input")
        last   = inputs.length - 1
        index  = inputs.index(event.target)

        # tabs
        if event.which is 9 and last is index
          event.preventDefault()
          addNewChoice event

        # enter or arrow_down
        if event.which is 13 or event.which is 40

          if last is index
            addNewChoice event
          else
            inputs[index + 1].focus()
          event.preventDefault()

        # arrow_up
        if event.which is 38
          form_inputs = $(event.target).closest(".choices").find("input")
          index = Math.max 0, form_inputs.index(event.target) - 1
          form_inputs.eq(index).focus()
          event.preventDefault()

    .on "submit", (event) ->
      event.preventDefault()

      form = $ @
      if form.data("validator").checkValidity()
        url = form.attr("action")
        $.ajax
            type: "POST"
            url:  url
            data: form.serialize()
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
          .done (msg) ->

            re = /(?!questions\/)(create|update\/[a-fA-F0-9]{32})/
            document.location = url.replace re, "show/#{msg.id}"

          .fail () ->
            console.log "TODO fail", arguments