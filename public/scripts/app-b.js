$(() => {

  // TESTING NEW SNIPPET, will have to make .create-new-snippet listener
  $('.create-new-story').on('click', function() {
    $('.modal-overlay').show();
    $('#modal-write-snippet').addClass('modal-active');
    })

  const $newSnippet = $('#modal-write-snippet form');

  $newSnippet.submit( function(event) {
    const snippetText = $('#snippet-text').val();
    console.log(snippetText);


    // WE NEED THE STORY ID TO BE LOADED ON RENDER ***
    const storyID = 1;
    // AJAX REQUEST TO /stories/:id here for SNIPPET
    $.post(`/stories/${storyID}`, {snippetText})
    .then((data) => {
      // ARRAY WITH OBJ - NEW SNIPPET RETURNED
      console.log(data);
    })


    event.preventDefault();
  });
});