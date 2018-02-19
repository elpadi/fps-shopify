<?php
function _t($name, $dir="snippets") {
	include(sprintf('%s/templates/%s/%s.php', __DIR__, $dir, $name));
}

_t('head', 'global');
_t('header', 'global');
_t('page', 'main');
_t('footer', 'global');
_t('foot', 'global');
