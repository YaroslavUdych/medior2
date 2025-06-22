# Changelog

All notable changes to this component will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2025-06-22

### Authors

Yaroslav Udych

### Added

-  Created reusable `Link` component with support for external and internal navigation
-  Created `UserCard` component to render individual user details and actions
-  Created `UserList` component to display a list of users
-  Defined `IUser` interface to type user data
-  Integrated `UserList` into the `Home` page with `users` as props
-  Fetched user list from external API (`usersUrl`) using SSR
-  Connected `page` component to load users and render `Home` with data

## [0.3.0] - 2025-06-21

### Authors

Yaroslav Udych

### Added

-  Created `MainText` component with hardcoded markdown rendered via `markdown-to-jsx`
-  Replaced all `<a>` tags with `<span>` styled as bold dark green text
-  Integrated `MainText` component into the homepage

## [0.2.0] - 2025-05-16

### Authors

Vilém Lipold

### Updated

-  Dependencies to the latest versions

## [0.1.0] - 2023-10-16

### Authors

Vilém Lipold

### Added

-  Initial release
