# YiiMan Site


## singles

### blogpage

- title

- subtitle

- Seo<component>

- search_input_title

- categories_title

### project_page

- related_projects_title

- table_tech_name_title

- table_tech_description_title

- technology_section_title

- project_language_title

- hours_post_string

- year_title

- working_type

- company_author_title

- preview_button_title

- current_status_title

### project_categories_page

- projects_count_title

- page_title

- sidebar_categories_title

### global

- copywrite_text

- siteName

- siteSubName

- phone_number

- phone_title

## Types

### Service

- title

- description

- icon

### testimotional

- name

- description

- semat

- Author<media>

### project

- name

- media[]<media>

- year

- **working_type**

- **current_status**

- **project_language**

- **technologies**[]

- **company**

- description

- working_hours

- defaultPicture<media>

- slug<UID>

- Seo<component>

- project_categories[]

- short_description

- url

### project_workink_types

- name

### menu

- name

- icon

- url

### current_project_status

- name

- description

### project_language

- name

- description

### technologies

- name

- short_description

- logo

- articles[]

- content

- slug

### article

- title

- description

- content

- slug

- category

- image

- author

### category

- name

- slug

- articles[]

### company

- company_name

- site_url

- logo

### faq

- question

- answer

- faq_category[]

### faq_category

- name

### project_category

- defaultPicture<media>

- content

- title

- slug

### site_change_log

- version_name

- changes

- date

### bookmarks

- url

- short_description

## Page components

### Slider

- Title

- Subtitle

- Url

- Image

- UrlTitle

### Hero

- title

### Logos

- companies[]

### News

- title

- subtitle

- categories[]

### Services

- title

- subtitle

- services[]

### Testimosional

- title

- content

- testimotionals[]

- background<media>

### Projects

- title

- subtitles

- projects[]

### Faq

- title

- subtitle

- faq_categories[]

## SiteMap

### Blog<articles[]>

- _slug<article>

- categories<categories[]>

	- _slug<category|articles[]>

### Projects<projects[]>

- _slug<project>

- categories<project_categories[]>

	- _slug<project_category>

### Technologies<technologies[]>

- _slug<technology>

- Atricles<atricles[]>

### Company<notFound>

- _slug<company>

## block components

### SliderBlock

### ServicesBlock

### TestimotionalBlock

### LogosBlock

### ProjectsBlock

### BlogBlock

