export default
{
  "accounts": [
    {
      "name": "Account Name", // for example: Facebook
      "page_id": "Page id", // for example: 185150934832623
      "page_name": "Url page" // for example: https://www.facebook.com/enespanol/
    }
  ],
  "locations": [
    "Select an option",
    "City one",
    "City two",
    "City three",
    "City four",
    "City five",
    "City six",
    "City seven",
    "City eight",
    "City nine",
    "City ten"
  ],
  "adUri": "API Backend URL", // Backend url
  "fbAds": {
    "mainContainerQuerySelector": "[id^='topnews_main_stream_'",
    "profileIdContainerQuerySelector": "a[title='Perfil']",
    "targetAdWord": "Sponsored", // In Spanish the word is Publicidad
    "postQuerySelector": "hyperfeed_story_id_",
    "postSubtitleQuerySelector": "[id^='fe_edsubtitle']",
    "postIdQuerySelector": "[name=ft_ent_identifier]"
  }
}
