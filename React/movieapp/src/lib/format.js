export function formatMoney(n) {
    if (!n) return "N/A";

    return new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD",
        notation: "compact", maximumFractionDigits: 1,
        }
    ).format(n);
}


export function formatRuntime(mins) {
    if (!mins) return "N/A";

    const h = Math.floor(mins / 60);
    const m = mins % 60;

    return `${h}h ${m}m`;
}