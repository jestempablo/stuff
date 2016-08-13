'use strict';

cartApp.directive('tooltip',function(){
    return {
        restrict: 'A',
        scope: {
            message:'=tooltip',
            position:'@tooltipPosition'
        },
        link: function(scope,element) {
            scope.$watch("message",function() {
                element.tooltip('destroy');
                setTimeout(function(){
                    element.tooltip({
                        title:scope.message,
                        container:'body',
                        placement: scope.position || 'top'
                    });
                },0);

            });
            element.tooltip({
                title:scope.message,
                container:'body',
                placement: scope.position || 'top'
            });
        }
    }
});