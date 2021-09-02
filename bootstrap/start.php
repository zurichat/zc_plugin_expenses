$env = $app->detectEnvironment(array(
    // The array value should be your hostname
    'development' => array('expenses.zuri.chat'),
));
<!-- $env = $app->detectEnvironment(function()
{
   return 'development';
}); -->