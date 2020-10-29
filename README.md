# Dillinger

[![N|Solid](https://www.noritex.com/logo.jpg)](https://www.norite.com/es/)

Noritex React polyfills for cross browser compatability all the way to IE 11

-   Support for: IE 11 and up
-   Just Magic

# How to implemented? Yes I know, most of the code is not ours, thank you Stack Overflow

-   The way we do is like this:
    `
    function isIE() {
    var ua = navigator.userAgent;
    /_ MSIE used to detect old browsers and Trident used to newer ones_/

                var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

                return is_ie;
            }

            function browserSupportsAllFeatures() {
                // for some reason unknown to me, you need the fallowing line
                if (isIE()) return false;
                return typeof window === "undefined" || (window.Promise && window.fetch && window.Symbol);
            }

            function main() {
                hydrate(
                    <BrowserRouter>
                        <App routes={routes} initialData={data} />
                    </BrowserRouter>,
                    document.getElementById("root")
                );
            }

            function loadScript(src, done) {
                console.log("loading scripts");
                var js = document.createElement("script");
                js.src = src;
                js.onload = function () {
                    console.log("Loaded Polyfills");
                    done();
                };
                js.onerror = function () {
                    done(new Error("Failed to load script " + src));
                };
                document.head.appendChild(js);
            }

            if (browserSupportsAllFeatures()) {
                console.log("browser supports all features");
                // Browsers that support all features run `main()` immediately.
                main();
            } else {
                // All other browsers loads polyfills and then run `main()`.
                loadScript("/polyfill.js", main);
                // main();
            }

    `
