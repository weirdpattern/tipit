#!/usr/bin/env bash

#===============================================================================
#
#          FILE:  change-author.sh
#
#         USAGE:  ./change-author.sh old-email username email
#
#   DESCRIPTION:  Updates the user information in existing commits.
#
#        AUTHOR:  Patricio Trevino <patricio@weirdpattern.com>
#       VERSION:  1.0
#       CREATED:  06/13/2016
#
#===============================================================================

usage(){
  echo "Usage:"
  echo "  `basename $0` old-email username email"
  echo "  "
  echo "  Parameters:"
  echo "  - old-email: the existing email to be replaced"
  echo "  - username:  the new username to be used"
  echo "  - email:     the new email to be used"

  exit 0
}

[[ $# -ne 3 ]] && usage

git filter-branch --env-filter '
OLD_EMAIL="$1"
CORRECT_NAME="$2"
CORRECT_EMAIL="$3"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
  export GIT_COMMITTER_NAME="$CORRECT_NAME"
  export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
  export GIT_AUTHOR_NAME="$CORRECT_NAME"
  export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
