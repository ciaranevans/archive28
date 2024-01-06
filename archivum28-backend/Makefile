.PHONY: install
install:
	pip install -r requirements.txt

.PHONY: lint
lint:
	ruff archivum28/

.PHONY: fmt
fmt:
	ruff --fix archivum28/

.PHONY: run
run:
	hypercorn archivum28.main:app
