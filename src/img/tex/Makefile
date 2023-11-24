# Define source and output directories
SRC_DIR = .
OUT_DIR = ../learn

# Define a list of .tex files to process
TEX_FILES = $(wildcard $(SRC_DIR)/*.tex)

# Define a pattern rule to convert .tex to .svg
$(OUT_DIR)/%.svg: $(SRC_DIR)/%.tex ${SRC_DIR}/mathematico.sty
		pdflatex -output-directory=$(OUT_DIR) $<
		pdf2svg $(OUT_DIR)/$*.pdf $(OUT_DIR)/$*.svg

# Define the 'all' target to build all SVG files
all: $(patsubst $(SRC_DIR)/%.tex, $(OUT_DIR)/%.svg, $(TEX_FILES))

# clean by default
all: clean

# Additional clean rule to remove temporary files
clean:
		rm -f $(OUT_DIR)/*.aux $(OUT_DIR)/*.out $(OUT_DIR)/*.log $(OUT_DIR)/*.pdf $(OUT_DIR)/*.fdb_latexmk $(OUT_DIR)/*.fls $(OUT_DIR)/*.synctex.gz

.PHONY: all clean