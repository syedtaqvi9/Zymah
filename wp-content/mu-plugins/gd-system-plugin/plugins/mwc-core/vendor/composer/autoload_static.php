<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit175cc36bc0c63eadacb7d46d2ad9ab73
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
        'G' => 
        array (
            'GoDaddy\\WordPress\\MWC\\Dashboard\\' => 32,
            'GoDaddy\\WordPress\\MWC\\Core\\' => 27,
            'GoDaddy\\WordPress\\MWC\\Common\\Tests\\' => 35,
            'GoDaddy\\WordPress\\MWC\\Common\\' => 29,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'GoDaddy\\WordPress\\MWC\\Dashboard\\' => 
        array (
            0 => __DIR__ . '/..' . '/godaddy/mwc-dashboard/src',
        ),
        'GoDaddy\\WordPress\\MWC\\Core\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'GoDaddy\\WordPress\\MWC\\Common\\Tests\\' => 
        array (
            0 => __DIR__ . '/..' . '/godaddy/mwc-common/tests',
        ),
        'GoDaddy\\WordPress\\MWC\\Common\\' => 
        array (
            0 => __DIR__ . '/..' . '/godaddy/mwc-common/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit175cc36bc0c63eadacb7d46d2ad9ab73::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit175cc36bc0c63eadacb7d46d2ad9ab73::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit175cc36bc0c63eadacb7d46d2ad9ab73::$classMap;

        }, null, ClassLoader::class);
    }
}
