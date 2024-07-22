@AssignmentOption2
Feature: AssignmentOption2

  @Positive
  Scenario: jsonplaceholder api<Scenario>
    Given Hit API endpoint is 'https://jsonplaceholder.typicode.com/'
    Then Add resource with endpoint "<resourse>"
    Then Hit the Method with manupilated endpoint "<HttpsMethod>"
    Then validate the responsecode"<statuscode>"

    Examples:
      | Scenario                           | HttpsMethod | resourse         | statuscode |
      | Validate api endpoint for GETtapi1 | GET         | posts/1/comments |        200 |
      | Validate api endpoint for GETapi2     | GET         | posts/1           |        200 |
      | Validate api endpoint for GETapi3     | GET         | posts             |        200 |
      | Validate api endpoint for GETtapi4    | GET         | comments?postId=1 |        200 |
      | Validate api endpoint for posttapi1   | post        | posts/1/comments  |        201 |
      | Validate api endpoint for postapi2    | post        | posts/1           |        404 |
      | Validate api endpoint for postapi3    | post        | posts             |        201 |
      | Validate api endpoint for postapi4    | post        | comments?postId=1 |        201 |
      | Validate api endpoint for PUTapi1     | PUT         | posts/1/comments  |        404 |
      | Validate api endpoint for PUTapi2     | PUT         | posts/1           |        200 |
      | Validate api endpoint for PUTapi3     | PUT         | posts             |        404 |
      | Validate api endpoint for PUTtapi4    | PUT         | comments?postId=1 |        404 |
      | Validate api endpoint for DELETEapi1  | DELETE      | posts/1/comments  |        404 |
      | Validate api endpoint for DELETEapi2  | DELETE      | posts/1           |        200 |
      | Validate api endpoint for DELETEapi3  | DELETE      | posts             |        404 |
      | Validate api endpoint for DELETEtapi4 | DELETE      | comments?postId=1 |        404 |
      | Validate api endpoint for PATCHEapi1  | PATCH       | posts/1/comments  |        404 |
      | Validate api endpoint for PATCHapi2   | PATCH       | posts/1           |        200 |
      | Validate api endpoint for PATCHapi3   | PATCH       | posts             |        404 |
      | Validate api endpoint for PATCHtapi4  | PATCH       | comments?postId=1 |        404 |

  @Edgecase @get
  Scenario: GET jsonplaceholder api<Scenario>
    Given Hit API endpoint is 'https://jsonplaceholder.typicode.com/'
    Then Add resource with endpoint "<resourse>"
    Then Hit the Method with manupilated endpoint "<HttpsMethod>"
    Then validate the "<statuscode>" and schema "<SchemaPath>"

    Examples:
      | Scenario                                    | HttpsMethod | resourse         | statuscode | SchemaPath    |
      | Validate and verify schema and json getapi1 | GET         | posts/1/comments |        200 | comments.json |
      | Validate and verify schema and json gettapi2 | GET         | posts/1           |        200 | post1.json       |
      | Validate and verify schema and json gettapi3 | GET         | posts             |        200 | posts.json       |
      | Validate and verify schema and json getapi4  | GET         | comments?postId=1 |        200 | commentpost.json |

  @Edgecase @post
  Scenario: POST jsonplaceholder api<Scenario>
    Given Hit API endpoint is 'https://jsonplaceholder.typicode.com/'
    Then Add resource with endpoint "<resourse>"
    Then Hit the Method with manupilated endpoint "<HttpsMethod>"
    Then validate the "<statuscode>" and responsemessage "<Responsemessage>"

    Examples:
      | Scenario                           | HttpsMethod | resourse          | statuscode | Responsemessage |
      | Validate api endpoint for postapi1 | post        | posts/1/comments  |        201 |             501 |
      | Validate api endpoint for postapi3 | post        | posts             |        201 |             101 |
      | Validate api endpoint for postapi4 | post        | comments?postId=1 |        201 |             501 |
