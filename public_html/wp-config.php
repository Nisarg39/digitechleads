<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u313449593_fnZmg' );

/** Database username */
define( 'DB_USER', 'u313449593_oYtBs' );

/** Database password */
define( 'DB_PASSWORD', 'SkoYphKd7Y' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'u,*o3kG#(|G~[dRyugL#o2a#,oPS&)Zmg$fnTE}oA PT~~-w(]`9]75($x|f==3X' );
define( 'SECURE_AUTH_KEY',   '(@cX4{ab/%p*bY@J:1u>;sp^*J9D~[Ky#^jUlMoOS5M:lbIA>cqyj+m]%0@x!ZY7' );
define( 'LOGGED_IN_KEY',     'iFb=Y%ZiTxu~DB3v1Si<|c^;]MbF2]O}/:vJnGK@E[=n_6ejkUas#++s<uS2u:1.' );
define( 'NONCE_KEY',         ' VMVB{yjrWX?Tm%1G|nwg?ept~6Jx$|48w|od{iU# $$*zW4;p6Abp4F7@.gB75i' );
define( 'AUTH_SALT',         'IpU~Gi<BYDk|-NMbDr}yivp$e#Lu)h%tO>?V+Tj:KP+AX4p0,0Eb2&t#p)n!ID?g' );
define( 'SECURE_AUTH_SALT',  '*V_}`:yYPs]IofGD_,#oo&k/.VMDJrjCtk[rz5wgmopIv>a@{<f6WEwz$NxV_Y,P' );
define( 'LOGGED_IN_SALT',    '.*Ot,<C3a~deFC.;!L-7Z>eHpZwmiGkV_CAFW@8xIvpOvJ!ue=Yi[df4+K>t.5}q' );
define( 'NONCE_SALT',        'B4NaL-8I)Z[%T(YP-#Vc(3q AG)r2p+pjz5IK$<Shsj--g5#G&~^P?Io{noVNSXg' );
define( 'WP_CACHE_KEY_SALT', 'B+~oL_}*3!|J?&1q#/g PL5TTUy+zE!G6l3VK#|Tu%g%j1@cgFWToJPrBo<+TnG*' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '1a6dc79b1319764bf193a95706586c93' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
