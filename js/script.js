// Roadmap configuration
const roadmaps = {
    1: {
        title: "Banking Compliance",
        steps: [
            "Regulatory requirements",
            "KYC & AML checks",
            "Reporting standards",
            "Audit preparation",
            "Ongoing monitoring"
        ]
    },
    2: {
        title: "Real Estate Compliance",
        steps: [
            "Property regulations",
            "Title verification",
            "Zoning compliance",
            "Transaction reporting",
            "Periodic review"
        ]
    },
    3: {
        title: "Share Compliance",
        steps: [
            "Shareholding disclosures",
            "Trading rules",
            "Insider regulations",
            "Reporting obligations",
            "Compliance review"
        ]
    },
    4: {
        title: "Mutual Fund Compliance",
        steps: [
            "Fund registration",
            "Disclosure norms",
            "Risk profiling",
            "Investor reporting",
            "Periodic audits"
        ]
    },
    5: {
        title: "ETF Compliance",
        steps: [
            "ETF structure rules",
            "Index tracking norms",
            "Liquidity checks",
            "Regulatory filings",
            "Performance review"
        ]
    },
    6: {
        title: "Real Estate Compliance (Advanced)",
        steps: [
            "Advanced zoning laws",
            "Cross-border property rules",
            "Tax implications",
            "Compliance audits",
            "Risk mitigation"
        ]
    },
    7: {
        title: "Tax Compliance",
        steps: [
            "Income assessment",
            "Tax filings",
            "Regulatory deadlines",
            "Audit readiness",
            "Compliance confirmation"
        ]
    },
    8: {
        title: "Tax Reduction",
        steps: [
            "Tax planning",
            "Deductions & exemptions",
            "Investment optimisation",
            "Legal structuring",
            "Savings review"
        ]
    }
};

// Open roadmap view
function openRoadmap(id) {
    const roadmapView = document.getElementById("roadmapView");
    const roadmapTitle = document.getElementById("roadmapTitle");
    const roadContent = document.getElementById("roadContent");

    if (!roadmapView || !roadmapTitle || !roadContent || !roadmaps[id]) return;

    // Show roadmap
    roadmapView.classList.remove("hidden");
    roadmapTitle.textContent = roadmaps[id].title;

    // Clear previous content
    roadContent.innerHTML = "";

    // Render steps
    roadmaps[id].steps.forEach((step, index) => {
        const stepEl = document.createElement("div");
        stepEl.className = "step";
        stepEl.setAttribute("data-step", index + 1);

        stepEl.innerHTML = `
            <div class="step-card">
                <h3>${step}</h3>
                <p>Structured compliance activity required for this phase.</p>
            </div>
        `;

        roadContent.appendChild(stepEl);
    });
}

// Hide roadmap view
function hideRoadmap() {
    const roadmapView = document.getElementById("roadmapView");
    if (!roadmapView) return;

    roadmapView.classList.add("hidden");
}
