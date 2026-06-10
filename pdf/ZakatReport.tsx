import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import type { ZakatResult } from "@/engine/types";
import {
  fmtEur,
  fmtDate,
  nisabRefLabel,
  hawlLabel,
  confidenceLabel,
} from "./pdfUtils";

const BRAND = "#059669";
const NEUTRAL_900 = "#0a0a0a";
const NEUTRAL_600 = "#525252";
const NEUTRAL_400 = "#a3a3a3";
const NEUTRAL_100 = "#f5f5f5";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    paddingVertical: 48,
    paddingHorizontal: 52,
    backgroundColor: "#ffffff",
    color: NEUTRAL_900,
    fontSize: 11,
  },
  // Header
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 28,
    paddingBottom: 16,
    borderBottom: `1 solid #e5e5e5`,
  },
  brandName: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: BRAND,
    letterSpacing: 0.3,
  },
  headerSub: {
    fontSize: 10,
    color: NEUTRAL_400,
    marginTop: 2,
  },
  headerDate: {
    fontSize: 10,
    color: NEUTRAL_600,
    textAlign: "right",
  },
  // Section titles
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: NEUTRAL_900,
    marginBottom: 8,
    marginTop: 20,
  },
  // Result box
  resultBox: {
    backgroundColor: NEUTRAL_900,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 10,
    color: "#a3a3a3",
    marginBottom: 4,
  },
  resultAmount: {
    fontSize: 30,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    letterSpacing: -0.5,
  },
  resultSub: {
    fontSize: 10,
    color: "#71717a",
    marginTop: 4,
  },
  // Info rows
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottom: `1 solid #f5f5f5`,
  },
  infoLabel: {
    fontSize: 10,
    color: NEUTRAL_600,
    flex: 1,
  },
  infoValue: {
    fontSize: 10,
    color: NEUTRAL_900,
    fontFamily: "Helvetica-Bold",
    textAlign: "right",
  },
  // Table
  tableHeader: {
    flexDirection: "row",
    backgroundColor: NEUTRAL_100,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 1,
  },
  tableHeaderText: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: NEUTRAL_600,
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderBottom: `1 solid #f5f5f5`,
  },
  tableRowAlt: {
    backgroundColor: "#fafafa",
  },
  col1: { flex: 3 },
  col2: { flex: 1, textAlign: "right" },
  col3: { flex: 1, textAlign: "right" },
  cellText: { fontSize: 10, color: NEUTRAL_900 },
  cellTextMuted: { fontSize: 10, color: NEUTRAL_600 },
  // Totals row
  totalRow: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#f0fdf4",
    marginTop: 2,
  },
  totalLabel: {
    flex: 3,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: NEUTRAL_900,
  },
  totalValue: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: NEUTRAL_900,
    textAlign: "right",
  },
  totalZakat: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: BRAND,
    textAlign: "right",
  },
  // Confidence
  confidenceBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  confidenceDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  confidenceText: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  factorRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
    marginTop: 3,
  },
  factorIcon: {
    fontSize: 9,
    width: 12,
  },
  factorText: {
    fontSize: 9,
    color: NEUTRAL_600,
    flex: 1,
  },
  // Disclaimer
  disclaimer: {
    marginTop: 28,
    paddingTop: 12,
    borderTop: `1 solid #e5e5e5`,
  },
  disclaimerText: {
    fontSize: 8.5,
    color: NEUTRAL_400,
    lineHeight: 1.5,
  },
  pageNumber: {
    position: "absolute",
    bottom: 24,
    right: 52,
    fontSize: 9,
    color: NEUTRAL_400,
  },
});

function confidenceColor(level: ZakatResult["confidence"]["level"]): string {
  if (level === "reliable") return "#16a34a";
  if (level === "probably_reliable") return "#d97706";
  return "#dc2626";
}

function factorIcon(type: "positive" | "warning" | "negative"): string {
  if (type === "positive") return "✓";
  if (type === "warning") return "⚠";
  return "✗";
}

interface ReportProps {
  result: ZakatResult;
}

function ZakatReportDocument({ result }: ReportProps) {
  const {
    zakatAmount,
    grossAssets,
    deductibleDebts,
    netZakatableWealth,
    nisabValue,
    isAboveNisab,
    assetLines,
    debtLines,
    confidence,
    calculationDate,
    nisabReference,
    hawlStatus,
  } = result;

  return (
    <Document
      title={`Rapport Zakāt al-Māl — ${fmtDate(calculationDate)}`}
      author="Zakat Calculator"
      creator="Zakat Calculator"
    >
      <Page size="A4" style={s.page}>
        {/* ── Header ── */}
        <View style={s.headerRow}>
          <View>
            <Text style={s.brandName}>Zakāt al-Māl</Text>
            <Text style={s.headerSub}>Rapport de calcul confidentiel</Text>
          </View>
          <View>
            <Text style={s.headerDate}>
              Calculé le {fmtDate(calculationDate)}
            </Text>
          </View>
        </View>

        {/* ── Result box ── */}
        <View style={s.resultBox}>
          <Text style={s.resultLabel}>
            {isAboveNisab ? "Zakāt due" : "Situation"}
          </Text>
          {isAboveNisab ? (
            <Text style={s.resultAmount}>{fmtEur(zakatAmount)}</Text>
          ) : (
            <Text style={[s.resultAmount, { fontSize: 18, color: "#a3a3a3" }]}>
              Zakāt non due — patrimoine sous le niṣāb
            </Text>
          )}
          {isAboveNisab && (
            <Text style={s.resultSub}>
              2,5 % × {fmtEur(netZakatableWealth)} patrimoine net
            </Text>
          )}
        </View>

        {/* ── Paramètres ── */}
        <Text style={s.sectionTitle}>Paramètres du calcul</Text>
        {[
          { label: "Référence niṣāb", value: nisabRefLabel(nisabReference) },
          { label: "Valeur du niṣāb", value: fmtEur(nisabValue) },
          { label: "Statut du ḥawl", value: hawlLabel(hawlStatus) },
          { label: "Actifs bruts", value: fmtEur(grossAssets) },
          { label: "Dettes déductibles", value: fmtEur(deductibleDebts) },
          { label: "Patrimoine net zakatable", value: fmtEur(netZakatableWealth) },
        ].map((row, i) => (
          <View key={i} style={s.infoRow}>
            <Text style={s.infoLabel}>{row.label}</Text>
            <Text style={s.infoValue}>{row.value}</Text>
          </View>
        ))}

        {/* ── Actifs ── */}
        {assetLines.length > 0 && (
          <>
            <Text style={s.sectionTitle}>Détail des actifs</Text>
            <View style={s.tableHeader}>
              <Text style={[s.tableHeaderText, s.col1]}>Actif</Text>
              <Text style={[s.tableHeaderText, s.col2]}>Montant</Text>
              <Text style={[s.tableHeaderText, s.col3]}>Zakāt (2,5 %)</Text>
            </View>
            {assetLines.map((line, i) => (
              <View
                key={i}
                style={[s.tableRow, i % 2 === 1 ? s.tableRowAlt : {}]}
              >
                <View style={s.col1}>
                  <Text style={s.cellText}>
                    {line.label}
                    {line.isEstimate ? " *" : ""}
                    {line.hasComplexity ? " ⚠" : ""}
                  </Text>
                </View>
                <Text style={[s.cellText, s.col2]}>
                  {fmtEur(line.baseAmount)}
                </Text>
                <Text style={[s.cellText, s.col3]}>
                  {fmtEur(line.zakatAmount)}
                </Text>
              </View>
            ))}
            <View style={s.totalRow}>
              <Text style={s.totalLabel}>Total actifs</Text>
              <Text style={s.totalValue}>{fmtEur(grossAssets)}</Text>
              <Text style={s.totalZakat}>{fmtEur(zakatAmount)}</Text>
            </View>
          </>
        )}

        {/* ── Dettes ── */}
        {debtLines.length > 0 && (
          <>
            <Text style={s.sectionTitle}>Dettes déductibles</Text>
            {debtLines.map((line, i) => (
              <View key={i} style={s.infoRow}>
                <Text style={s.infoLabel}>{line.label}</Text>
                <Text style={[s.infoValue, { color: "#dc2626" }]}>
                  −{fmtEur(line.amount)}
                </Text>
              </View>
            ))}
          </>
        )}

        {/* ── Indice de confiance ── */}
        <Text style={s.sectionTitle}>Indice de confiance</Text>
        <View style={s.confidenceBadge}>
          <View
            style={[
              s.confidenceDot,
              { backgroundColor: confidenceColor(confidence.level) },
            ]}
          />
          <Text
            style={[
              s.confidenceText,
              { color: confidenceColor(confidence.level) },
            ]}
          >
            {confidenceLabel(confidence.level)}
          </Text>
        </View>
        {confidence.factors.map((f, i) => (
          <View key={i} style={s.factorRow}>
            <Text style={s.factorIcon}>{factorIcon(f.type)}</Text>
            <Text style={s.factorText}>{f.label}</Text>
          </View>
        ))}

        {/* ── Disclaimer ── */}
        <View style={s.disclaimer}>
          <Text style={s.disclaimerText}>
            Ce rapport est généré à titre indicatif. Il ne constitue pas une
            fatwa et ne remplace pas l&apos;avis d&apos;un érudit qualifié. Les
            règles appliquées sont fondées sur les avis des savants de Ahl
            as-Sunnah wa-l-Jamā&apos;ah. Vos données financières sont
            calculées localement sur votre appareil et n&apos;ont pas été
            transmises à un tiers. Pour les situations complexes, consultez un
            imam ou un spécialiste en jurisprudence islamique.
            {"\n"}* Valeur estimée   ⚠ Actif à vérifier
          </Text>
        </View>

        <Text
          style={s.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

export async function generatePdf(result: ZakatResult): Promise<void> {
  const blob = await pdf(<ZakatReportDocument result={result} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `zakat-${result.calculationDate}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}
