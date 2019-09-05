# Apply two eslintrc.json files for one workspace, possible? #747

## Link to the issue

https://github.com/microsoft/vscode-eslint/issues/747

## Issue description

The following works as expected:

- Within `branches\dev-branch\src\lib\Tools.js` I get the following error: 
	- "Strings must use singlequote.".

- Within `branches\dev-branch\test\automatedTestWithinBrowser.test.js` I get the following error: 
	- "Missing semicolon."

The following works not as expected:

- In `branches\dev-branch\test\html\js\main.src.js` I do not get an error "Strings must use singlequote.".

- Within `branches\dev-branch\test\automatedTestWithinBrowser.test.js` I get the following error: 
	- "Strings must use singlequote."

## Conclusion

It seems like `branches\dev-branch\test\.eslintignore` is blocking every rule from `branches\dev-branch\.eslintrc.json` to be applied to `branches\dev-branch\test\html\js\main.src.js`. That makes no sense at all to me, because like that I do currently use the workaround which I explained within the opening post of the issue.

Also `branches\dev-branch\.eslintignore` does not apply to rules from `branches\dev-branch\.eslintrc.json` which are applied to `branches\dev-branch\test\automatedTestWithinBrowser.test.js`. See "Strings must use singlequote." error. I would like that error to not happen when I define my configs and ignores like in this example. Why should some rule form `.eslintrc.json` be applied, but a `.eslintignore` file on the same level is void. IMO a more granular approach is required for ignores.

How should it work IMO?

Terminology: "above a file" is defined like this: `C:\bla.txt` is defined above `C:\bla\bla.txt`. "below a file" is then the opposite.

- From my point of view `branches\dev-branch\test\.eslintignore` should only apply to rules defined within `branches\dev-branch\test\.eslintrc.json` and `branches\dev-branch\.eslintignore` should only apply to rules defined within `branches\dev-branch\.eslintrc.json`.

- Every `.eslintrc.json` above a file should apply to it whereby the last `.eslintrc.json` (in this case `branches\dev-branch\test\.eslintrc.json`) takes precedence only for a rule which is defined in both. 

- If a rule is defined within `branches\dev-branch\.eslintrc.json`, but not `branches\dev-branch\test\.eslintrc.json`, then `branches\dev-branch\.eslintignore` should apply to that rule and not `branches\dev-branch\test\.eslintignore` in case `branches\dev-branch\test\html\js\main.src.js` is the current file which gets linted. At the moment it seems like that the rules and ignore files just get merged, which means that you can end up with an ignore for a rule that you most likely never intended. I would expect that `branches\dev-branch\.eslintignore` applies for rules defined in `branches\dev-branch\.eslintrc.json` and not that `branches\dev-branch\test\.eslintignore` can ignore rules from  `branches\dev-branch\.eslintrc.json`.

I hope these three points give you an idea on how I think it should work.

Why should it work like that?

It also works like that when I execute eslint via the two scripts defined within the `branches\dev-branch\package.json`. These two scripts yield the IMO correct and expected errors. It would be nice when vscode-eslint would yield the combined output of those scripts with no duplicates.

At the moment everything behaves totally unnatural to me. The logic seems to be very overcomplicated or too simple, depending on how you see it. Would you not expect that the things that I mentioned under the point "The following works not as expected:" to actually work in this example? I mean how to cope with the current situation in this example? IMO it would be so simple and natual if this simply with these two config-files and ingore-files.


## Ask for help

I cannot make it work with your solution approach from your first comment. I do not understand why I should need four `.eslintrc.json` and four `.eslintignore` instead of two when I just eslint my whole folder without the vscode-eslint extension with the two scripts within `branches\dev-branch\package.json`.

I also have a hard time to understand what it means something is resolved relativ to something, because that is not very explicit and can mean many things. I cannot infer what you mean by that from the documentation of eslint and vscode-eslint. Can you describe that for me in more detail pls?

How do I solve the problem? Do I have to use the workaround I mentioned within my opening post?

If something it not clear enough, then I will try to explain it better.